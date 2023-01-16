import Button from "./Button";

function ButtonSection() {
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
      <Button />
    </div>
  );
}

export default ButtonSection;
