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
      ],
    })
  })
