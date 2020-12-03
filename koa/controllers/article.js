const list = [
    {
        title: "JS基础",
        key: 'luanxie',
        children: [
            {
                id: 1,
                type: 'link',
                name: '防抖节流',
                content: "https://www.yuque.com/u2025518/lgkgod/xkl0v6"
            },
            {
                id: 2,
                type: 'link',
                name: '内存管理',
                content: "https://www.yuque.com/u2025518/lgkgod/ny150b"
            },
        ]
    },
]
class Article {
    constructor(props) {
        this.params = props
    }

    find(key, id) {
        return new Promise((resolve, reject) => {
            const titleList = list.filter(item => item.key == key)
            if (titleList[0] && titleList[0].children && titleList[0].children.length > 0) {
                resolve(titleList[0].children.find(item => item.id == id
                ))
            } else {
                resolve({})
            }

        })

    }
    findAll() {
        return new Promise((resolve) => {
            resolve(list)
        })
    }
}

module.exports = new Article()