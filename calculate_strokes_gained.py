import pandas as pd
import numpy as np 

# [distance in yards, tee, fairway, rough, sand, recovery, putting]
data_table = [
    [0.333, None, None, None, None, None, 1],
    [1, None, None, None, None, None, 1.04],
    [1.333, None, None, None, None, None, 1.13],
    [1.666, None, None, None, None, None, 1.23],
    [2, None, None, None, None, None, 1.34],
    [2.333, None, None, None, None, None, 1.42],
    [2.666, None, None, None, None, None, 1.50],
    [3, None, None, None, None, None, 1.56],
    [3.333, None, None, None, None, None, 1.61],
    [5, None, None, None, None, None, 1.78],
    [6.666, None, None, None, None, None, 1.87],
    [10, None, 2.20, 2.49, 2.41, None, 1.98],
    [13.333, None, None, None, None, None, 2.06],
    [15, None, 2.30, 2.54, 2.47, None, 2.10],
    [16.666, None, None, None, None, None, 2.14],
    [20, None, 2.40, 2.59, 2.53, None, 2.21],
    [25, None, 2.45, 2.64, 2.59, None, 2.30],
    [30, None, 2.50, 2.69, 2.67, None, 2.40],
    [35, None, 2.55, 2.74, 2.76, None, None],
    [40, None, 2.60, 2.78, 2.82, None, None],
    [45, None, 2.62, 2.82, 2.90, None, None],
    [50, None, 2.65, 2.85, 2.98, None, None],
    [55, None, 2.67, 2.88, 3.07, None, None],
    [60, None, 2.70, 2.91, 3.15, None, None],
    [65, None, 2.72, 2.92, 3.17, None, None],
    [70, None, 2.73, 2.93, 3.19, None, None],
    [75, None, 2.74, 2.95, 3.22, None, None],
    [80, None, 2.75, 2.96, 3.24, None, None],
    [85, None, 2.77, 2.97, 3.23, None, None],
    [90, None, 2.78, 2.99, 3.23, None, None],
    [95, None, 2.79, 3.01, 3.23, None, None],
    [100, 2.92, 2.80, 3.02, 3.23, 3.80, None],
    [105, 2.93, 2.81, 3.03, 3.23, 3.80, None],
    [110, 2.95, 2.83, 3.04, 3.22, 3.80, None],
    [115, 2.97, 2.84, 3.06, 3.21, 3.80, None],
    [120, 2.99, 2.85, 3.08, 3.21, 3.78, None],
    [125, 2.99, 2.86, 3.09, 3.21, 3.78, None],
    [130, 2.97, 2.88, 3.11, 3.21, 3.78, None],
    [135, 2.97, 2.90, 3.13, 3.22, 3.78, None],
    [140, 2.97, 2.91, 3.15, 3.22, 3.80, None],
    [145, 2.97, 2.93, 3.17, 3.23, 3.80, None],
    [150, 2.99, 2.95, 3.19, 3.25, 3.80, None],
    [155, 2.99, 2.97, 3.21, 3.26, 3.80, None],
    [160, 2.99, 2.98, 3.23, 3.28, 3.81, None],
    [165, 3.01, 3.00, 3.25, 3.30, 3.81, None],
    [170, 3.02, 3.03, 3.27, 3.33, 3.81, None],
    [175, 3.04, 3.06, 3.29, 3.36, 3.81, None],
    [180, 3.05, 3.08, 3.31, 3.40, 3.82, None],
    [185, 3.07, 3.11, 3.34, 3.43, 3.83, None],
    [190, 3.09, 3.13, 3.37, 3.47, 3.84, None],
    [195, 3.11, 3.16, 3.40, 3.51, 3.86, None],
    [200, 3.12, 3.19, 3.42, 3.55, 3.87, None],
    [210, 3.14, 3.26, 3.48, 3.62, 3.89, None],
    [220, 3.17, 3.32, 3.53, 3.70, 3.92, None],
    [230, 3.21, 3.39, 3.80, 3.77, 3.95, None],
    [240, 3.25, 3.45, 3.64, 3.84, 3.97, None],
    [250, 3.35, 3.52, 3.69, 3.88, 4.00, None],
    [260, 3.45, 3.58, 3.74, 3.93, 4.03, None],
    [270, 3.55, 3.63, 3.78, 3.96, 4.07, None],
    [280, 3.65, 3.69, 3.83, 4.00, 4.10, None],
    [290, 3.68, 3.74, 3.87, 4.02, 4.15, None],
    [300, 3.71, 3.78, 3.90, 4.04, 4.20, None],
    [320, 3.79, 3.84, 3.95, 4.12, 4.31, None],
    [340, 3.86, 3.88, 4.02, 4.26, 4.44, None],
    [360, 3.92, 3.95, 4.11, 4.41, 4.56, None],
    [380, 3.96, 4.03, 4.21, 4.55, 4.66, None],
    [400, 3.99, 4.11, 4.30, 4.69, 4.75, None],
    [420, 4.02, 4.15, 4.34, 4.73, 4.79, None],
    [440, 4.08, 4.20, 4.39, 4.78, 4.84, None],
    [460, 4.17, 4.29, 4.48, 4.87, 4.93, None],
    [480, 4.28, 4.40, 4.59, 4.98, 5.04, None],
    [500, 4.41, 4.53, 4.72, 5.11, 5.17, None],
    [520, 4.54, 4.85, 4.85, 5.24, 5.30, None],
    [540, 4.65, 4.97, 4.97, 5.36, 5.42, None],
    [560, 4.74, 5.05, 5.05, 5.44, 5.50, None],
    [580, 4.79, 5.10, 5.10, 5.49, 5.55, None],
    [600, 4.82, 5.13, 5.13, 5.52, 5.58, None]
]

columns = ['distance', 'tee', 'fairway', 'rough', 'sand', 'recovery', 'green']

data = pd.DataFrame(data_table,columns=columns)

# print(data)

def calculate_strokes_gained(distance, shot_surface, data):
    # Find the index corresponding to the given distance
    distance_index = data[data['distance'] == distance].index

    # Check if the distance exists in the DataFrame
    if len(distance_index) == 0:
        print("Invalid distance entered.")
        return None

    # Check if the shot_surface exists as a column in the DataFrame
    if shot_surface not in data.columns:
        print("Invalid shot surface entered.")
        return None

    # Fetch the value associated with the given distance and shot_surface
    strokes_gained = data.at[distance_index[0], shot_surface]

    # Convert to float
    strokes_gained = float(strokes_gained)

    return strokes_gained

