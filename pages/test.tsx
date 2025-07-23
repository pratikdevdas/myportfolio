import { useState } from "react";

export default function App() {
  type Store = { rowIndex: number; columnIndex: number };
  const [store, setStore] = useState<Store[]>([]);
  const [isRemoving, setIsRemoving] = useState(false);

  const BOX_DATA = [
    [1, 1, 1],
    [1, 0, 0],
    [1, 1, 1],
  ];
  const flatOneLevelAndRemoveZeroAndReturnLenght = (arr: number[][]) =>
    arr.flat().filter(Boolean).length;
  const existsInStore = (rowIndex: number, columnIndex: number) => {
    const val = store.filter(
      (n) => n.columnIndex === columnIndex && n.rowIndex === rowIndex
    );
    return val.length ? true : false;
  };

  console.log(store);
  const handleClick = (rowIndex: number, columnIndex: number) => {
			if (!existsInStore(rowIndex, columnIndex)) {
				setStore([...store, { rowIndex, columnIndex }]);
		}

    const indexLength = store.length + 1;
    const areAllCompleted =
      flatOneLevelAndRemoveZeroAndReturnLenght(BOX_DATA) === indexLength;

						console.log(areAllCompleted)
    if (areAllCompleted) {
					console.log('first')
					const remove = ()=> {
						let number = 1
						console.log(store.length)
						if(store.length === 0) return
						setTimeout(()=>{
							setStore(store.slice(0,store.length - number))
							number++
							remove()
						}, 500)	
							
					}
					remove()

					
      // const remove = () => {
      // 		if (store.length) {
      // 			console.log('execute')
      // 				setStore(store.slice(0,1));
      // 				remove();
      // 		}
      // return;
    }
    // return;
    // }
  };
  // render the boxes as per array
  // user will be able to click on the boxes
  // after clicking select it by chaning background color
  // after selection dont let user select the same boxe
  // when the last box is selected, deselect from reverse order(fsfo)
  return (
    <div className="App">
      {BOX_DATA.map((n, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
          }}
        >
          {n.map((m, columnIndex) => {
            if (m) {
              return (
                <div
                  key={columnIndex}
                  style={{
                    width: "50px",
                    height: "50px",
                    border: "1px solid black",
                    margin: "10px",
                    background: existsInStore(rowIndex, columnIndex)
                      ? "red"
                      : "white",
                  }}
                  role="button"
                  onClick={() => handleClick(rowIndex, columnIndex)}
                ></div>
              );
            }
          })}
        </div>
      ))}
    </div>
  );
}
