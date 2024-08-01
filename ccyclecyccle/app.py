from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Main/main.html')

@app.route('/people_selection')
def people_selection():
    return render_template('Track/Selection/people_selection.html')

@app.route('/management')
def management():
    return render_template('Track/Management/track_management.html')

@app.route('/kategorie_selection')
def kategorie_selection():
    people = request.args.get('people')
    return render_template('Track/Selection/kategorie_selection.html', people=people)

@app.route('/tempo_selection')
def tempo_selection():
    category = request.args.get('category')
    return render_template('Track/Selection/tempo_selection.html', category=category)

@app.route('/date_selection')
def date_selection():
    return render_template('Track/Selection/date_selection.html')

@app.route('/time_selection')
def time_selection():
    return render_template('Track/Selection/time_selection.html')

@app.route('/when_selection')
def when_selection():
    time = request.args.get('time')
    return render_template('Track/Selection/when_selection.html', time=time)

@app.route('/before_breakfast_selection')
def before_breakfast_selection():
    return render_template('Track/Selection/before_breakfast_selection.html')

@app.route('/brf_prefer_selection')
def brf_prefer_selection():
    return render_template('Track/Selection/brf_prefer_selection.html')

@app.route('/breakfast_selection')
def breakfast_selection():
    return render_template('Track/Selection/breakfast_selection.html')

@app.route('/before_lunch_selection')
def before_lunch_selection():
    return render_template('Track/Selection/before_lunch_selection.html')

@app.route('/lnc_prefer_selection')
def lnc_prefer_selection():
    return render_template('Track/Selection/lnc_prefer_selection.html')

@app.route('/lunch_selection')
def lunch_selection():
    return render_template('Track/Selection/lunch_selection.html')

@app.route('/before_dinner_selection')
def before_dinner_selection():
    return render_template('Track/Selection/before_dinner_selection.html')

@app.route('/dnr_prefer_selection')
def dnr_prefer_selection():
    return render_template('Track/Selection/dnr_prefer_selection.html')

@app.route('/dinner_selection')
def dinner_selection():
    return render_template('Track/Selection/dinner_selection.html')

@app.route('/after_dinner_selection')
def after_dinner_selection():
    return render_template('Track/Selection/after_dinner_selection.html')

if __name__ == '__main__':
<<<<<<< HEAD
    app.run('0.0.0.0', port=5000, debug=True)
=======
    app.run('0.0.0.0', port=5000, debug=True)
>>>>>>> 6ace67a659b2f4d16a8a770e6069b319ebc1f1cb
