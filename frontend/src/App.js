function App() {
    return (
        <div>
            <h1>Добро пожаловать в военкомат!</h1>
            <button onClick={() => alert("Вы выбрали пойти к врачу!")}>
                Пойти к врачу
            </button>
            <button onClick={() => alert("Вы сбежали из военкомата!")}>
                Сбежать
            </button>
        </div>
    );
}

export default App;
