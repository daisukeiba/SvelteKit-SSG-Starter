// htmlタグを除去
export function removeHTMLTags(html: string): string {
  const regex = /(<([^>]+)>)/ig;
  const result = html.replace(regex, '');
  return result;
}

// limitより文字数が多かったらlimitまでの文字列を返す
export function truncateString(string: string, limit: number) {
  if (string.length > limit) {
    return string.substring(0, limit);
  }
  return string;
}