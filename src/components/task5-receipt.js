import React from 'react';
import '../beauty/recipe.css';
import tomatoes from '../images/tomatoes.jpg';

const Recipe = () => {
    return (
        <div className="recipe-container">
            <h1 className="recipe-title">Томлённые помидоры<br />по рецепту Юлии Высоцкой</h1>

            <section className="recipe-section">
                <p className="section-paragraph">
                    Во времена Войны за испанское наследство (1701–1714) французская армия,
                    под командованием маршала де Тессе,
                    успешно отразила попытки британцев, голландцев и португальцев захватить крепость Бадахос.
                    Несмотря на многочисленные осады и атаки
                    союзников, французские войска смогли удержать крепость и предотвратить её падение,
                    что стало важной стратегической победой для французов в этом конфликте.

                    Многие отряды пехоты и кавалерии, подошедшие к стенам крепости,
                    были сожжёны заживо потоками горящего масла, сброшенными с высоких каменных стен.
                    После успешной обороны, французы обнаружили на подступах к крепости странные плоды,
                    похожие на помидоры, которые под действием огня стали чёрными, и приобрели необыкновенный вкус.
                    Вкус был настолько уникальным, что блюдо вскоре вошло в гастрономическую историю французской кухни
                    как "Merci pour les légumes, au revoir!"
                </p>
            </section>

            <section className="recipe-section">
                <h2 className="section-title">С чем сочетается блюдо, и как его правильно подать</h2>
                <p className="section-paragraph">
                    Тёмные томаты лучше всего подать в атмосфере, которая перекликается с их мистической историей. Они отлично сочетаются с блюдами, которые тоже имеют неординарный характер, такими как:
                </p>
                <ul className="ingredient-list">
                    <li className="ingredient-item">Чёрный бургер Джек Дэниэлс, с мясом чёрного петуха Аям Цемани</li>
                    <li className="ingredient-item">Котлеты из чёрного риса</li>
                    <li className="ingredient-item">Разные виды крафтового сыра с плесенью (Дорблю Гранд Нуар, Кастелло Блэк, Касу Марцу)</li>
                </ul>
                <p className="section-paragraph">
                    В качестве напитков можно предложить:
                </p>
                <ul className="drink-list">
                    <li className="drink-item">Вино с глубоким вкусом, например, "Чёрный принц" Hincesti</li>
                    <li className="drink-item">Чёрный китайский чай с добавлением имбиря</li>
                </ul>
                <p className="section-paragraph">
                    Создайте атмосферу средневекового застолья, добавив тёмные скатерти и чёрные свечи. Отключите свет и воду, ни в коем случае не включайте кондиционеры. Музыкальное сопровождение пусть организует местный бард, а ещё лучше - наймите придворного шута!
                </p>
            </section>

            <section className="recipe-section">
                <h2 className="section-title">Ингредиенты</h2>
                <ul className="ingredient-list">
                    <li className="ingredient-item"><b>Помидоры</b> (желательно зрелые и мясистые) — 1 кг</li>
                    <li className="ingredient-item"><b>Масло</b> (любое, главное чтоб закипало) — 5 л</li>
                    <li className="ingredient-item"><b>Соль</b> — 2 ч. ложки</li>
                    <li className="ingredient-item"><b>Сахар</b> — 1 ч. ложка</li>
                    <li className="ingredient-item"><b>Чеснок</b> (по желанию) — 3 зубчика, измельчённый</li>
                    <li className="ingredient-item"><b>Сушеные травы</b> (тимьян, розмарин) — 1 ч. ложка</li>
                </ul>
            </section>

            <section className="recipe-section">
                <h2 className="section-title">Пошаговый рецепт</h2>
                <ol className="recipe-steps">
                    <li className="recipe-step">
                        <strong className="step-title">Подготовка помидоров:</strong>
                        <p className="step-description">Вымойте помидоры и обсушите их. Разрежьте помидоры на половинки или четвертинки в зависимости от их размера.</p>
                    </li>
                    <li className="recipe-step">
                        <strong className="step-title">Подготовка к запеканию:</strong>
                        <p className="step-description">Выложите помидоры на противень, застелённый бумагой для выпечки. Полейте помидоры оливковым маслом. Посыпьте солью, сахаром, измельчённым чесноком и сушеными травами.</p>
                    </li>
                    <li className="recipe-step">
                        <strong className="step-title">Томление:</strong>
                        <p className="step-description">Разогрейте духовку <b>до 190°C</b>. Поместите противень с помидорами в духовку и готовьте в течение <b>минимум 3 часов, а вообще, чем дольше, тем лучше.</b></p>
                    </li>
                    <li className="recipe-step">
                        <strong className="step-title">Проверка готовности:</strong>
                        <p className="step-description">Помидоры должны стать чёрными и очень мягкими, почти как пюре. Если они начинают образовывать корочку, это знак, что они приближаются к идеалу (иначе, получатся альденте).</p>
                    </li>
                    <li className="recipe-step">
                        <strong className="step-title">Охлаждение и подача:</strong>
                        <p className="step-description">Выньте помидоры из духовки и дайте им остыть до комнатной температуры. Подайте в стильной тарелке или чаше, чтобы подчеркнуть их уникальный вид.</p>
                    </li>
                </ol>
            </section>

            <section className="recipe-section">
                <h2 className="section-title">Ты посмотри, какая сказка!</h2>
                <p className="section-paragraph">
                    <img src={tomatoes} alt="Ты посмотри, какая сказка!" className="cover-image" />
                    <br />
                    <p className="section-paragraph">
                        Помидоры в результате должны иметь глубокий, насыщенный вкус с лёгкими карамелизированными нотками и богатым ароматом, который напоминает обжаренные специи и сушёные травы. Консистенция мягкая и пастообразная, что делает их отличным дополнением к разным блюдам или даже как самостоятельное угощение.
                    </p>
                    <div className="book-video">
                        <iframe
                            src="https://www.youtube.com/embed/QbqPb_239Y8"
                            title="Видео про вяленые помидоры"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="video-frame"
                        ></iframe>
                    </div>
                </p>

            </section>
        </div>
    );
};

export default Recipe;