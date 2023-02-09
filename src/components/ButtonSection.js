import useResolution from "../hook/useResolution";
import Button from "./Button";
import NumberCubed from "./NumberCubed";

function ButtonSection() {
  const resolution = useResolution();

  function alertFunction() {
    alert("Button is Clicked");
  }

  function customFunction(param) {
    console.log(param);
  }

  const buttons = [
    {
      text: "Default",
      type: "button",
      onClick: alertFunction
    },
    {
      text: "Alert",
      type: "button",
      onClick: customFunction,
      customClass: "alert"
    },
    {
      text: "Warning",
      type: "reset",
      customClass: "warning"
    }
  ];
  return (
    <section>
      <NumberCubed />
      <div>
        {buttons.map((button, index) => {
          return (
            <Button
              key={index}
              type={button?.type}
              onClick={button?.onClick}
              text={button?.text}
              customClass={button?.customClass}
            />
          );
        })}

        {resolution <= 1000 && <Button />}
      </div>
    </section>
  );
}

export default ButtonSection;
