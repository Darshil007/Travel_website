const myStyle = {
    display: "-webkit-box",
    WebkitLineClamp: "2",
    WebkitBoxOrient: "vertical",
  };
  //for create avatar as name
  const myFun = (myName) => {
    const data = myName.toUpperCase().split(" ");
    const avatarName = data.map((data) => data.charAt(0));
    return avatarName;
  };
  //JSON to generate a dummy database
  const apiData = [
    {
      category: "Lorem, ipsum dolor.",
      title:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
      date: new Date().toDateString(),
      location: "Iscon, Ahmedabad",
      subCategory: "Ocean",
      price: "Free",
      image:
        "https://www.tailwindtap.com/assets/components/scale-effect-card/flower.jpg",
      name: "infynno solution",
    },
    {
      category: "Lorem, ipsum dolor.",
      title:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
      date: new Date().toDateString(),
      location: "Gota, Ahmedabad",
      subCategory: "Ocean",
      price: "Free",
      image:
        "https://www.tailwindtap.com/assets/components/scale-effect-card/mountain.jpg",
      name: "React js",
    },
    {
      category: "Lorem, ipsum dolor.",
      title:
        " Lorem ipsum dolor sit, amet consectetur adipisicing elit.Accusamus, mollitia dolorem cupiditat necessitatibus ad quaerepudiandae cumque quos numquam a, natus quod expedita, dictaveniam porro minus delectus eos nemo?",
      date: new Date().toDateString(),
      location: "Sola, Ahmedabad",
      subCategory: "Ocean",
      price: "$52",
      image:
        "https://www.tailwindtap.com/assets/components/scale-effect-card/sunset.jpg",
      name: "Laravel development",
    },
    {
      category: "Lorem, ipsum dolor.",
      title: " Lorem ipsum dol",
      date: new Date().toDateString(),
      location: "Sarkhej, Ahmedabad",
      subCategory: "Ocean",
      price: "Free",
      image:
        "https://www.tailwindtap.com/assets/components/scale-effect-card/greenleaves.jpg",
      name: "Infynno",
    },
  ];
  const Cards = () => {
    return (
      <div className="bg-black bg-opacity-20 min-h-[100vh] flex items-center">
        <div className="container mx-auto">
          {/* card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-10 text-left mx-5 xl:mx-10">
            {Array(2).fill(
              apiData.map((data, index) => (
                <div
                  className="border rounded-lg hover:drop-shadow-md overflow-hidden relative bg-white"
                  key={index}
                >
                  {/* image and avatar block */}
                  <div className="cursor-pointer h-48 overflow-hidden">
                    <img
                      src={data.image}
                      alt="Profile image for perticular category"
                      sizes="300px"
                      className="w-full h-full hover:scale-125 delay-200 duration-300 ease-in-out"
                    />
                    <span className="absolute top-4 right-4 w-8 h-8 items-center bg-gray-100 flex justify-center rounded-full">
                      {data.name && myFun(data.name)}
                    </span>
                  </div>
                  {/* card fields section  */}
                  <div className="p-4 space-y-2 relative h-60 text-gray-400">
                    <div>
                      <p className="text-sm font-bold truncate">
                        {data.category}
                      </p>
                    </div>
                    <div>
                      <span
                        style={myStyle}
                        className="text-xl font-bold text-gray-600 overflow-hidden h-12"
                      >
                        {data.title}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CategoryIcon />
                      <span className="text-sm font-normal">
                        {data.subCategory}
                      </span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <DateIcon />
                      <span className="text-sm font-normal">{data.date}</span>
                    </div>
                    <div className="flex gap-2 justify-start items-center">
                      <LocationIcon />
                      <span className="text-sm font-normal">{data.location}</span>
                    </div>
                    {/* fix bottom section */}
                    <div className="bottom-2 absolute inset-x-0">
                      <div className="border-t mt-2 mb-2"></div>
                      <span className="text-xl text-gray-600 pl-4">
                        {data.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    );
  };
  export default Cards;
  const CategoryIcon = () => (
    <svg
      stroke="gray"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M4 4h6v6h-6z"></path>
      <path d="M14 4h6v6h-6z"></path>
      <path d="M4 14h6v6h-6z"></path>
      <path d="M17 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
    </svg>
  );
  const DateIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 2048 2048"
    >
      <path
        fill="gray"
        d="M1792 993q60 41 107 93t81 114t50 131t18 141q0 119-45 224t-124 183t-183 123t-224 46q-91 0-176-27t-156-78t-126-122t-85-157H128V128h256V0h128v128h896V0h128v128h256v865zM256 256v256h1408V256h-128v128h-128V256H512v128H384V256H256zm643 1280q-3-31-3-64q0-86 24-167t73-153h-97v-128h128v86q41-51 91-90t108-67t121-42t128-15q100 0 192 33V640H256v896h643zm573 384q93 0 174-35t142-96t96-142t36-175q0-93-35-174t-96-142t-142-96t-175-36q-93 0-174 35t-142 96t-96 142t-36 175q0 93 35 174t96 142t142 96t175 36zm64-512h192v128h-320v-384h128v256zM384 1024h128v128H384v-128zm256 0h128v128H640v-128zm0-256h128v128H640V768zm0 512h128v128H640v-128zm384-384H896V768h128v128zm256 0h-128V768h128v128zM384 768h128v128H384V768z"
      />
    </svg>
  );
  const LocationIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-4 h-4"
      viewBox="0 0 24 24"
    >
      <path
        fill="gray"
        d="M12 12q.825 0 1.413-.588T14 10q0-.825-.588-1.413T12 8q-.825 0-1.413.588T10 10q0 .825.588 1.413T12 12Zm0 7.35q3.05-2.8 4.525-5.088T18 10.2q0-2.725-1.738-4.462T12 4Q9.475 4 7.737 5.738T6 10.2q0 1.775 1.475 4.063T12 19.35Zm0 2.275q-.2 0-.4-.075t-.35-.2Q7.6 18.125 5.8 15.362T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 2.4-1.8 5.163t-5.45 5.987q-.15.125-.35.2t-.4.075ZM12 10.2Z"
      />
    </svg>
  );
  