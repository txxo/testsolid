import { Show, createResource } from "solid-js"

async function fetchUsers() {
  const res = await fetch('https://api.github.com/users')
  return res.json()
}


export default function Ac() {

  const [users] = createResource(fetchUsers)

  return (
    <Show when={users()} fallback='loading'>
      <div>
        <For each={users()}>
          {function (user) {
            return (
              <div>
                <p>{user.login}</p>
                <img src={user.avatar_url}></img>
                <br />
                <br />
                <br />
              </div>
            )
          }
          }

        </For>

      </div>
    </Show>
  )
}