import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter options={{ strings: [ "Soigner", "Progresser", "Motiver", "Santé", ], autoStart: true, loop: true, deleteSpeed: 50, }} />
  );
}

export default Type;