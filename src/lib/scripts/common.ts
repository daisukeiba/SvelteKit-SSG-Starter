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

// Twitterのシェアダイアログを表示
export function twitterShare(shareUrl: string, shareText: string, shareHashtag: string): void {
  // Android for Twitter App Bug fix.
  // let url = 'http://twitter.com/share?url=';
  let url = 'http://twitter.com/intent/tweet?url=';
  url += encodeURIComponent(shareUrl);
  url += `&text=${encodeURIComponent(shareText)}`;
  if(shareHashtag) {
    url += `&hashtags=${encodeURIComponent(shareHashtag)}`;
  }
  window.open(url, 'share', [
    'width=550',
    'height=450',
    'location=yes',
    'resizable=yes',
    'toolbar=no',
    'menubar=no',
    'scrollbars=no',
    'status=no'
  ].join(',')
  );
}

// Facebookのシェアダイアログを表示
export function facebookShare(shareUrl: string): void {
  let url = 'http://www.facebook.com/share.php?u=';
  url += encodeURIComponent(shareUrl);
  window.open(url, 'share', [
    'width=550',
    'height=450',
    'location=yes',
    'resizable=yes',
    'toolbar=no',
    'menubar=no',
    'scrollbars=no',
    'status=no'
  ].join(',')
  );
}

// LINEのシェアダイアログを表示
export function lineShare(shareUrl: string, shareText: string, isMobile: boolean): void {
  let url;
  if (isMobile) {
    url = 'http://line.me/R/msg/text/?';
    url += encodeURIComponent(shareText);
    url += `%20${encodeURIComponent(shareUrl)}`;
  } else {
    url = 'https://timeline.line.me/social-plugin/share?url=';
    url += encodeURIComponent(shareUrl);
  }
  window.open(url, 'share', [
    'width=550',
    'height=450',
    'location=yes',
    'resizable=yes',
    'toolbar=no',
    'menubar=no',
    'scrollbars=no',
    'status=no'
  ].join(',')
  );
}