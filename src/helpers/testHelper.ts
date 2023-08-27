import { Test1Dto } from 'src/test1/dto/create-test1.dto';
import { CreateTest2Dto } from 'src/test2/dto/create-test2.dto';

export const balancedGroupSymbols = ({ inputData }: Test1Dto): Boolean => {
  if (inputData.length == 0) {
    return false;
  }

  const openChars = '({[';
  const closeChars = ')}]';

  const tempData: String[] = [];
  for (const char of inputData) {
    if (openChars.includes(char)) {
      tempData.push(char);
    } else {
      const lastOpenChar = tempData.reverse()[0] || null;
      const position1 = openChars.indexOf(String(lastOpenChar));

      if (closeChars.indexOf(char) !== position1) {
        return false;
      }
    }
  }
  return true;
};

export const snailRearrangement = ({ arrData }: CreateTest2Dto): number[] => {
  const result: number[] = [];
  const rows = arrData.length;
  const cols = arrData[0].length;

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (top <= bottom && left <= right) {
    for (let i = left; i <= right; i++) {
      result.push(arrData[top][i]);
    }
    top++;

    for (let i = top; i <= bottom; i++) {
      result.push(arrData[i][right]);
    }
    right--;

    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        result.push(arrData[bottom][i]);
      }
      bottom--;
    }

    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        result.push(arrData[i][left]);
      }
      left++;
    }
  }

  return result;
};
