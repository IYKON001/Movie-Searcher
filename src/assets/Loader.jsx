import loader from './loading.gif'

export default function Loader(){
    return (
    <div className="load">
        <img src={loader} className="loader-img"/>
    </div>
    )
}