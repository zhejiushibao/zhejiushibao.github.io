document.addEventListener('DOMContentLoaded', () => {
    const apContainer = document.createElement('div')
    apContainer.id = 'aplayer'
    document.body.append(apContainer)
    const ap = new APlayer({
      container: document.getElementById('aplayer'),
      fixed: true,
      audio: [
        {
          name: '晚夜微雨问海棠',
          artist: '陈亦洺 / 喧笑',
          url: 'https://cdn.jsdelivr.net/gh/zhejiushibao/yinyue@main/1.mp3',
          cover: 'http://p1.music.126.net/3x4HLyzg9K5OXbTWttbRYA==/109951165073688416.jpg?param=130y130',
        },
        {
          name: '倾尽天下',
          artist: '河图',
          url: 'https://cdn.jsdelivr.net/gh/zhejiushibao/yinyue@main/%E6%B2%B3%E5%9B%BE%20-%20%E5%80%BE%E5%B0%BD%E5%A4%A9%E4%B8%8B.mp3',
          cover: 'http://p1.music.126.net/nlocSgc4D7T-h6S3f6IybQ==/6003333487842277.jpg?param=130y130'
        }
      ],
    })
  })
