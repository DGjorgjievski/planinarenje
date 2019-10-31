import React from 'react'

const cardStyle={
    margin:'0 auto',
    padding:'50px'
}
const btnStyle={
    float:'right'
}
const slikaStyle={
    width: "100%",
    maxHeight:250,
    height:'100%',
}
const h3Style=
{
    paddingTop:'50px',
    paddingBottom:'50px'
}

function CardsContainer() {
    return (
        <div>
            <h3 style={h3Style}>НАСТАНИ</h3>
            <div className="card-deck" style={cardStyle}>
                <div className="card"> 
                            <img className="card-img-top" src={require('../SLIKI/s1.jpg')} style={slikaStyle}/>
                        
                        <div className="card-body">
                            <h5 className="card-title">Љуботен 2499</h5>
                            <p className="card-text">Атрактивноста на турата е во врвот, кој има форма на пирамида. Љуботен важи за малку суров врв поради тоа што претставува еден вид "пристаниште" на Шара каде се прекршуваат сите ветришта. </p>
                            <button className="btn btn-info" style={btnStyle}>Повеќе</button>
                        </div>
                        
  </div>
                    <div className="card">
                        <img src={require('../SLIKI/s2.jpg')} className="card-img-top" style={slikaStyle}/>
                            <div className="card-body">
                                <h5 className="card-title">Салаковски езера 2180 и Убава</h5>
                                <p className="card-text">Есента е време кога планината ги покажува сите свои бои.
Салаковските езера се две глацијални езера на планината Јакупица во Македонија кои се наоѓаат на 2180 мнв. </p>
                                <button className="btn btn-info" style={btnStyle}>Повеќе</button>
                            </div>
                            
  </div>
                        <div className="card">
                            <img src={require('../SLIKI/s3.jpg')} className="card-img-top" style={slikaStyle}/>
                                <div className="card-body">
                                    <h5 className="card-title">Врв 3/12: Бајрак на Караџица </h5>
                                    <p className="card-text">
                                    На почетокот на декември, одиме да го искачиме врвот Бајрак на северниот дел на планинскиот масив Мокра на пределот помеѓу неговите планински огранки Караџица и Китка, во срцето на областа Торбешија , јужно до градот Скопје!  
                                    </p>
                                    <button className="btn btn-info" style={btnStyle}>Повеќе</button>
                                </div>
                                
  </div>
                        </div>


                        <div className="card-deck" style={cardStyle}>
                <div className="card">
                    <img src={require('../SLIKI/s4.jpg')} className="card-img-top" style={slikaStyle}/>
                        <div className="card-body">
                            <h5 className="card-title">Mеденица- Карбула- Галичник</h5>
                            <p className="card-text">Три града Тетово, Кавадарци и Скопје сплотени во дружба и запознавање во центарот на Македонија. 
ПК "I love hiking group Macedonia" и ПК Тетекс ве носат на преубавата Бистра (Маврово) со врвовите Меденица 2163мнв и Карбула 2148мнв со крај во селото Галичник.</p>
                            <button className="btn btn-info" style={btnStyle}>Повеќе</button>
                        </div>
                        
  </div>
                    <div className="card">
                        <img src={require('../SLIKI/s5.jpg')} className="card-img-top" style={slikaStyle}/>
                            <div className="card-body">
                                <h5 className="card-title">Раса 1369м</h5>
                                <p className="card-text">Уште некоја акција за промоција на планинарството. 
Раса е од оние тури кои нудат повеќе опции - секој да се искачи до каде што сака и секоја екипа да си го помине времето онака како што сака, сѐ со цел турата да биде убава и лесна.
 </p>
                                <button className="btn btn-info" style={btnStyle}>Повеќе</button>
                            </div>
                            
  </div>
                        <div className="card">
                            <img src={require('../SLIKI/s6.jpg')} className="card-img-top" style={slikaStyle}/>
                                <div className="card-body">
                                    <h5 className="card-title">Рибничка Скала 2391м</h5>
                                    <p className="card-text">За прв пат јавно организирана акција за масивот Кораб со искачување на врвот Рибничка Скала. Одењето на овој терен е сведено на минимум од клубовите во Македонија. Поради тежината на искачувањето.</p>
                                    <button className="btn btn-info" style={btnStyle}>Повеќе</button>
                                </div>
                                
  </div>
                        </div>


                    </div>
                    )
                }
                
export default CardsContainer