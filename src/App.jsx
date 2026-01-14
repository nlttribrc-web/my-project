import './App.css'

function App() {

  return (
    <>
      <div id="container" class="mx-auto my-[30px] max-w-[400px] p-5">
        <div class="form-wrap bg-white px-[25px] py-[15px] text-[#333] shadow-lg rounded-sm">
          <h1 class="text-center text-2xl font-semibold">Sign In</h1>
          <form>
            <div class="form-group mt-[15px]">
              <label for="email" class="block text-left text-[#666]">Email</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                class="w-full p-2.5 border border-[#ddd] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#49c1a2] focus:border-transparent transition-all"
              />
            </div>

            <div class="form-group mt-[15px]">
              <label for="password" class="block text-left text-[#666]">Password</label>
              <input 
                type="password" 
                name="password" 
                id="password" 
                class="w-full p-2.5 border border-[#ddd] rounded-[5px] focus:outline-none focus:ring-2 focus:ring-[#49c1a2] focus:border-transparent transition-all"
              />
            </div>

            <button 
              type="submit" 
              class="block w-full mt-5 p-2.5 bg-[#49c1a2] text-white border-none cursor-pointer rounded-[5px] transition-colors duration-300 hover:bg-[#37a08e]"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
