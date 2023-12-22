import './more.scss'

const More = () => {
    return ( 
        <section className="more">
            <div className="container">
                <h2 className="more-title title">ПОЛЕЗНОЕ ДЛЯ ВАС</h2>
                <div className="more-content row">
                    <article className="more-item">
                        <div className="more-description">
                            <h1 className="more-description-title">Креветки</h1>
                            <p className="more-description-text"> Богаты белками, низкокалорийны и содержат витамины и минералы, такие как железо и цинк.</p>
                        </div>
                    </article>
                    <article className="more-item">
                        <div className="more-description">
                            <h1 className="more-description-title">Кальмары</h1>
                            <p className="more-description-text">Содержат много белков, железа и витаминов группы В. Также они являются хорошим источником меди и селена.</p>
                        </div>
                    </article>
                    <article className="more-item">
                        <div className="more-description">
                            <h1 className="more-description-title">Мидий</h1>
                            <p className="more-description-text">Богаты белками, железом, витаминами группы В и цинком. Они также содержат большое количество омега-3 жирных кислот, которые полезны для сердечно-сосудистой системы.</p>
                        </div>
                    </article>
                </div>
            </div>
        </section>
     );
}
 
export default More;