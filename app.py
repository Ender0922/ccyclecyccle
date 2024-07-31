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

if __name__ == '__main__':
    app.run(debug=True)
