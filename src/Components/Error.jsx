import {useRouteError} from 'react-router-dom'


function Error() {

    const err = useRouteError();
    return (
        <div>
            <h3 className='bg-white py-3 my-5 m-2 m-sm-5  text-center text-danger'>{err.status}: {err.statusText}</h3>
            <h5 className=' m-2 m-sm-5 ' >{err.data}</h5>
            
            <p className=' m-2 m-sm-5' >{err.error.stack}</p>
        </div>
    )
}

export default Error;