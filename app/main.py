from fastapi import FastAPI

app = FastAPI(
    title="AI Road Damage Detection System",
    version="1.0.0",
)


@app.get("/")
def root():
    return {
        "message": "AI Road Damage Detection Backend is running 🎉"
    }
