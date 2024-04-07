import { useState } from "react";

const Accordian = () => {
  const [view , setView] = useState(1);

  const accordionData = [
    {
      id: 1,
      heading: "Accordion Item 1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      heading: "Accordion Item 2",
      content:
        "Praesent in consequat eros. Sed auctor erat sit amet mi auctor ultrices.",
    },
    {
      id: 3,
      heading: "Accordion Item 3",
      content: "Fusce scelerisque, leo ut tincidunt efficitur.",
    },
    {
      id: 4,
      heading: "Accordion Item 4",
      content:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer imperdiet turpis nec mauris congue dapibus.",
    },
    {
      id: 5,
      heading: "Accordion Item 5",
      content:
        "Duis tincidunt, arcu a facilisis lacinia, velit turpis suscipit est, in laoreet mi tortor eget lorem.",
    },
    {
      id: 6,
      heading: "Accordion Item 6",
      content:
        "Suspendisse potenti. Proin fermentum nunc vitae nibh aliquam, sit amet dictum mi volutpat.",
    },
    {
      id: 7,
      heading: "Accordion Item 7",
      content:
        "Integer efficitur magna sit amet arcu ultrices, ut laoreet purus tempus.",
    },
    {
      id: 8,
      heading: "Accordion Item 8",
      content:
        "Quisque laoreet, libero eget volutpat rutrum, est tortor volutpat dui, a luctus est nulla nec ante.",
    },
    {
      id: 9,
      heading: "Accordion Item 9",
      content:
        "Nullam nec tincidunt lectus. Nullam euismod metus nec libero tristique, eu ultricies felis cursus.",
    },
    {
      id: 10,
      heading: "Accordion Item 10",
      content:
        "Nam eu mi nec nunc fermentum interdum. Ut suscipit ligula vitae metus rhoncus aliquam.",
    },
  ];

  const handleClick = (currentId) =>{
    setView(currentId == view ? null : currentId);
  }

  return (
    <div className="w-8/12 bg-black text-white mx-auto">
      {accordionData.map((data) => (
        <div key={data.id} className="border-b-2 border-white" onClick={() => handleClick(data.id)}>
          <div className="font-bold text-xl p-4 flex justify-between">
            <h1>data.header</h1>
            {view == data.id ? '⬆️' : '🔽'}
          </div>
          {view == data.id && <div className="mb-4">{data.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordian;
