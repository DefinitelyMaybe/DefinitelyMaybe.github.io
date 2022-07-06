<script context="module">
  import { BoxBufferGeometry, MeshStandardMaterial, FrontSide } from "three";
  import { Mesh, Group } from "threlte";
</script>
<script>
  export let position = undefined
  export let rotation = undefined
</script>
<Group position={position} rotation={rotation} castShadow receiveShadow>
  {#each [1,1,1] as box}
    {@const x = Math.random()}
    {@const xSign = Math.random() > 0.5? 1:-1}
    {@const z = Math.random()}
    {@const zSign = Math.random() > 0.5? 1:-1}
    <Mesh
    castShadow
    receiveShadow
    position={{ x: xSign*x, y: 0, z: zSign*z }}
    geometry={new BoxBufferGeometry(1, 1, 1)}
    material={new MeshStandardMaterial({ side: FrontSide, color: 'black' })} />
  {/each}
</Group>