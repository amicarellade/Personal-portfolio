#!/usr/bin/env node
// Usage: node add-book.js
// Prompts for book details and inserts into Supabase books table.

import readline from 'readline';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: new URL('../.env', import.meta.url).pathname });

const SUPABASE_URL = 'https://kyxrzabpxzanarfllgun.supabase.co';
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY;

if (!SUPABASE_SERVICE_KEY) {
    console.error('Missing SUPABASE_SERVICE_KEY in .env');
    process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = q => new Promise(resolve => rl.question(q, resolve));

const CATEGORIES = ['fiction', 'non-fiction', 'data-science', 'sports'];
const STATUSES = ['read', 'currently-reading'];

async function main() {
    console.log('\n── Add a Book ──────────────────────────\n');

    const title = (await ask('Title: ')).trim();
    const author = (await ask('Author: ')).trim();

    console.log(`\nCategories: ${CATEGORIES.join(', ')}`);
    let category = '';
    while (!CATEGORIES.includes(category)) {
        category = (await ask('Category: ')).trim().toLowerCase();
    }

    console.log(`\nStatuses: ${STATUSES.join(', ')}`);
    let status = '';
    while (!STATUSES.includes(status)) {
        status = (await ask('Status: ')).trim().toLowerCase();
    }

    let rating = null;
    if (status === 'read') {
        let ratingInput = '';
        while (!['1','2','3','4','5'].includes(ratingInput)) {
            ratingInput = (await ask('Rating (1–5): ')).trim();
        }
        rating = parseInt(ratingInput);
    }

    const cover_url = (await ask('Cover URL (leave blank to skip): ')).trim() || null;

    rl.close();

    console.log('\nInserting...');
    const { data, error } = await supabase
        .from('books')
        .insert([{ title, author, category, status, rating, cover_url }])
        .select();

    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    console.log(`\n✓ Added "${data[0].title}" by ${data[0].author} (id: ${data[0].id})`);
}

main();
