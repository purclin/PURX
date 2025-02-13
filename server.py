from flask import Flask, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = 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

@app.route("/consultar_ia", methods=["POST"])
def consultar_ia():
    datos = request.json
    pregunta = datos.get("pregunta")
    if not pregunta:
        return jsonify({"respuesta": "Por favor, ingresa una pregunta válida."})

    try:
        respuesta = openai.Completion.create(
            engine="text-davinci-003",
            prompt=pregunta,
            max_tokens=100
        )
        return jsonify({"respuesta": respuesta.choices[0].text.strip()})
    except Exception as e:
        return jsonify({"respuesta": f"Error: {str(e)}"})

if __name__ == "__main__":
    app.run(debug=True)
