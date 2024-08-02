from flask import Flask, render_template, request, jsonify
import json
import requests
import math

app = Flask(__name__)

@app.route('/')
def index():
    try:
        addresses = request.args.get('address')[1:-1].split(",")
    except:
        addresses = []
    return render_template('Main/main.html', addresses=addresses)

@app.route('/people_selection')
def people_selection():
    return render_template('Track/Selection/people_selection.html')

@app.route('/group_selection')
def group_selection():
    return render_template('Track/Selection/group_selection.html')

@app.route('/management')
def management():
    return render_template('Track/Management/track_management.html')

@app.route('/tempo_selection')
def tempo_selection():
    category = request.args.get('category')
    return render_template('Track/Selection/tempo_selection.html', category=category)

@app.route('/date_selection')
def date_selection():
    return render_template('Track/Selection/date_selection.html')

@app.route('/playtime_selection')
def time_selection():
    return render_template('Track/Selection/playtime_selection.html')

@app.route('/when_selection')
def when_selection():
    time = request.args.get('time')
    return render_template('Track/Selection/when_selection.html', time=time)

@app.route('/menu_prefer_selection')
def menu_prefer_selection():
    return render_template('Track/Selection/menu_prefer_selection.html')

@app.route('/restaurant_selection')
def restaurant_selection():
    try:
        preferences = request.args.get('preferences').split(",")

        # Load the JSON file
        file_path = 'restaurant.json'  # 실제 파일 경로로 바꿔주세요
        with open(file_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        categories = {
            "style": ["한식", "양식", "중식", "일식", "동남아시아식"],
            "material": ["밥", "빵", "면", "고기", "기타"],
            "spicy": ["매움", "안매움"]
        }
        # Define the categories we are interested in
        target_styles = [item for item in preferences if item in categories["style"]]
        target_materials = [item for item in preferences if item in categories["material"]]
        target_spiciness = [item for item in preferences if item in categories["spicy"]]

        # Initialize a list to hold the results
        filtered_restaurants = []

        # Helper function to filter restaurants
        def filter_restaurants(data, styles, materials, spiciness):
            for style in styles:
                if style in data:
                    for material in data[style]:
                        for spice in data[style][material]:
                            if material.strip() in materials and spice.strip() in spiciness:
                                filtered_restaurants.extend(data[style][material][spice])
        
        # Apply the filter
        filter_restaurants(data, target_styles, target_materials, target_spiciness)
        filtered_restaurants.sort(key=lambda x: float(x['Rate']), reverse=True)

        return render_template('Track/Selection/restaurant_selection.html', recommended_restaurant=filtered_restaurants)
    except Exception as e:
        return render_template('Track/Selection/restaurant_selection.html', recommended_restaurant=[])

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
