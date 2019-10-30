import React from 'react'

const cardStyle={
    margin:'0 auto',
    padding:'50px'
}

function CardsContainer() {
    return (
        <div>
            <div className="card-deck" style={cardStyle}>
                <div className="card">
                    <img src={require('../SLIKI/s1.jpg')} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">ЉУБОТЕН 2499</h5>
                            <p className="card-text">Атрактивноста на турата е во врвот, кој има форма на пирамида. Љуботен важи за малку суров врв поради тоа што претставува еден вид "пристаниште" на Шара каде се прекршуваат сите ветришта. Љуботен е моќен, величествен и горд. И затоа Љ. секогаш ќе асоцира на Љуботен. 
Во чест на 13 ноември – ден на град Скопје се искачува Љуботен, како планина која го чува овој град и е на грбот на симболот на град Скопје.</p>
                            <button className="btn btn-info">Повеќе</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
  </div>
                    <div className="card">
                        <img src={require('../SLIKI/s2.jpg')} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Салаковски езера 2180 и Убава</h5>
                                <p className="card-text">Есента е време кога планината ги покажува сите свои бои.
Салаковските езера се две глацијални езера на планината Јакупица во Македонија кои се наоѓаат на 2180 мнв. На потполно иста висина како и Караниколички езера. Две езера кои се единствени и постојани на овој масив. Сместени се под врвот Убава.</p>
                                <button className="btn btn-info">Повеќе</button>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
  </div>
                        <div className="card">
                            <img src={require('../SLIKI/s3.jpg')} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Врв 3/12: Бајрак на Караџица </h5>
                                    <p className="card-text">
                                    На почетокот на декември, одиме да го искачиме врвот Бајрак на северниот дел на планинскиот масив Мокра на пределот помеѓу неговите планински огранки Караџица и Китка, во срцето на областа Торбешија , јужно до градот Скопје! Врв кој речиси сите сме го гледале од различни страни, од планинарскиот дом „Караџица“, од Убава и Салаковски Езера, од Китка и Преслап, од Празни Торба, но малкумина сме го искачиле и посетиле! „Да го развееме бајракот на слободата и Македонија, на Бајрак!“ 
                                    </p>
                                    <button className="btn btn-info">Повеќе</button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
  </div>
                        </div>


                        <div className="card-deck" style={cardStyle}>
                <div className="card">
                    <img src={require('../SLIKI/s1.jpg')} className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <button className="btn btn-info">Повеќе</button>
                        </div>
                        <div className="card-footer">
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </div>
  </div>
                    <div className="card">
                        <img src={require('../SLIKI/s2.jpg')} className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                                <button className="btn btn-info">Повеќе</button>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
  </div>
                        <div className="card">
                            <img src={require('../SLIKI/s3.jpg')} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                                    <button className="btn btn-info">Повеќе</button>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </div>
  </div>
                        </div>


                    </div>
                    )
                }
                
export default CardsContainer