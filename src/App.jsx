import './App.css'

function App() {

  return (
    <>
    <div id="container" className=''>
      <div id="log-in-form" className='flex justify-center mt-36'>
        <div className='w-1/5 border border-slate-300 pt-12 pb-9 px-8 rounded'>
          <h1 className='block text-3xl font-bold text-center'>Sign In</h1>
          <p className='text-center text-slate-500 mt-5 mb-9'>Enter your credencials to continue</p>
          <form action="">
            <input type="email" className='block w-full mb-10 border-slate-300 rounded' placeholder='Email' />
            <input type="password" className='block w-full border-slate-300 rounded' placeholder='Password' />
            <div id="remember-password" className='flex justify-between mt-8 mb-7'>
              <div id="remember-checkbox">
                <input type="checkbox" className='relative bottom-0.5 mr-2 border-slate-300 rounded' />
                <label htmlFor="" className='text-slate-600 font-medium'>Remember me</label>
              </div>
              <a href="" className='text-blue-500 font-medium'>Forgot password?</a>
            </div>
            <button className='w-full h-10 mb-7 text-white bg-blue-500 rounded'>
              Sign in
            </button>
          </form>
          <p className='text-center text-slate-500'>Don't have an account? <span className='text-blue-500 font-medium'>Create one</span></p>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
