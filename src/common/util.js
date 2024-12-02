export const splitOnLineChange = (text) => {
    return text.split(/\r?\n/).map(line => line.trim()).filter(line => line.length > 0);
  };