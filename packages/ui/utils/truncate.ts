const truncate = (text: string, n: number) => {
  const textArr = text.split('');

  return `${textArr.slice(0, n).join('')}...${textArr.slice(-n).join('')}`;
};

export { truncate };
