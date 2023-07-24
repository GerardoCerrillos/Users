import './App.css'
import FormUser from './components/FormUser'
import UserCard from './components/UserCard'
import useFetch from './hooks/useFetch'


function App() {
  const baseUrl = 'https://users-crud.academlo.tech'
  const[ users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById
  ] = useFetch(baseUrl)

  useFetch (() => {
    getAllUsers('/users')
  },[])

  return (
  <div>
    <h1>Users</h1>
    <FormUser
    createNewUser={createNewUser}
    />
    <div>
      {
        users?.map(user => (
          <UserCard 
          key={user.id}
          user={user}
          />
        ))
      }
    </div>
  </div>
  )
}

export default App
