

export default function Card(props) {

    

    return (
        <>
        
                
                  <div className="col">
                    <div className="card bg-black">
                      <img src={props.thumb} className="card-img-top" alt="" />
                      <div className="card-body text-start">
                        <p className="card-text text-white">{props.title}</p>
                      </div>
                    </div>
                  </div>
            
        
        </>
    )
}