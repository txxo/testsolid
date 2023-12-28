import { createSignal } from "solid-js"
import Card from "./Card"
import { A } from "@solidjs/router"

export default function Home() {
  const [dktheme, setDktheme] = createSignal(false)
  function toggleTheme() {
    setDktheme(!dktheme())
    console.log(dktheme())
  }
  return (

    <div>
      <div class="container m-auto">
        <header class="my-4 p-2 text-xl flex items-center gap-4"
          classList={{ "bg-neutral-900": dktheme(), "text-white": dktheme() }}
        >
          <span
            class="material-symbols-outlined cursor-pointer"
            onClick={toggleTheme}
          >
            light_mode
            <a href='/ac'>XXX</a>
          </span>
          <h1 class="text-1xl font-bold">似血</h1>
        </header></div>





      <div class="grid grid-cols-4 gap-10 my-4">
        <Card rounded={true} flat={false}>
          <h2>a</h2>
          <p>Hello @NetNinja, please can you do a tutorial on ionic vue and building android with capacitor?</p>
          <button class='btn'>Click Me</button>
        </Card>
        <Card rounded={true} flat={false}>
          <h2>a</h2>
          <p>Hello @NetNinja, please can you do a tutorial on ionic vue and building android with capacitor?</p>
          <button class='btn'>Click Me</button>
        </Card>
        <Card rounded={true} flat={false}>
          <h2>a</h2>
          <p>Hello @NetNinja, please can you do a tutorial on ionic vue and building android with capacitor?</p>
          <button class='btn'>Click Me</button>
        </Card>
      </div>
    </div >


  )

}