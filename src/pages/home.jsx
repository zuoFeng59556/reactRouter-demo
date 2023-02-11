import { useNavigate,Outlet } from 'react-router-dom'

function Home() {
  const navigate = useNavigate() 
  
  function goToLogin() {
    navigate('/login')
  }

  function goToLogout() {
    navigate('/logout')
  }

  return (
    <>
      <h1>这里是 Home </h1>
      <button onClick={goToLogin}>show login </button>
      <button onClick={goToLogout}>show logout </button>

      {/* 这里的 Outlet 是二级路由的出口 也就是渲染的地方 */}
      <Outlet/>
    </>
  )
}

export default Home