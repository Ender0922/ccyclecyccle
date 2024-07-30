from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('Main/main.html')

@app.route('/people_selection')
def selection():
    return render_template('Track/Selection/people_selection.html')

@app.route('/management')
def management():
    return render_template('Track/Management/track_management.html')

if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)
print()