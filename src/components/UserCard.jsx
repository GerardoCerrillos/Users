
const UserCard = (user) => {

  return (
    <article>
      <h2>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul>
        <li>
          <span>Email</span>
          <span>{user.email}</span>
          </li>
        <li>
          <span>birthday</span>
          <span>{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer>
        <button><i className='bx bx-trash'></i></button>
        <button><i className='bx bx-edit' ></i></button>
      </footer>
    </article>
  )
}

export default UserCard