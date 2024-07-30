from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Main/main.html')

@app.route('/food_type')
def food_type():
    return render_template('Track/Selection/food_type.html')

@app.route('/taste_selection')
def taste_selection():
    return render_template('Track/Selection/taste_selection.html')

@app.route('/management')
def management():
    return render_template('Track/Management/track_management.html')

if __name__ == '__main__':
    app.run(debug=True)
