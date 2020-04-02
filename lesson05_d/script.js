let arr = ['1746563527', '294856435537', '204857694847', '4029283646', '975646535422', '656473829212', '7535352422672'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
      console.log(item);
    }
  });