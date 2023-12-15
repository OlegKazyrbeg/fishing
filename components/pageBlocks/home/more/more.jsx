import './more.scss'

const More = () => {
    return ( 
        <section className="more">
            <div className="container">
                <h2 className="more-title title">ПОЛЕЗНОЕ ДЛЯ ВАС</h2>
                <div className="more-content row">
                    <article className="more-item">
                        <div className="more-description">
                            <h1 className="more-description-title">Удочки</h1>
                            <p className="more-description-text">Выбирайте удочку в зависимости от типа рыбы, которую вы собираетесь ловить. Например, для ловли крупной рыбы на большом водоеме нужна удочка с большой мощностью и длиной.</p>
                        </div>
                    </article>
                    <article className="more-item">
                        <div className="more-description">
                            <h1 className="more-description-title">Катушки</h1>
                            <p className="more-description-text">Выбирайте катушку, которая соответствует вашей удочке и типу рыбы. Катушка должна быть легкой и прочной.</p>
                        </div>
                    </article>
                    <article className="more-item">
                        <div className="more-description">
                            <h1 className="more-description-title">Крючки</h1>
                            <p className="more-description-text">Выбирайте крючки в зависимости от размера рыбы. Крючки должны быть острыми и прочными.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
     );
}
 
export default More;