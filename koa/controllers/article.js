const list = [
    {
        authorId: "2jahxa",
        authInfo: {
            avatar: "http://203.195.144.87:3100/assets/images/avatar.jpg",
            id: "2jahxa",
            userName: "罗小淳"
        },
        category: "asaa",
        categoryInfo: {
            name: "JS基础",
            id: "asaa"
        },
        title: "防抖节流",
        createAt: "2020-11-20",
        like: 10,
        viewed: 100,
        type: "yuque",
        link: "https://www.yuque.com/u2025518/lgkgod/xkl0v6",
        poster: "http://mingme.oss-cn-beijing.aliyuncs.com/image/poster/20201102/1604327850157_406ac87ec128cc97ada8a5d08220fa94.jpeg"
    },
    {
        authorId: "2jahxa",
        authInfo: {
            avatar: "http://203.195.144.87:3100/assets/images/avatar.jpg",
            id: "2jahxa",
            userName: "罗小淳"
        },
        category: "asaa",
        categoryInfo: {
            name: "JS基础",
            id: "asaa"
        },
        title: "内存管理",
        createAt: "2020-11-20",
        like: 10,
        viewed: 10,
        type: "yuque",
        link: "https://www.yuque.com/u2025518/lgkgod/ny150b",
        poster: "http://mingme.oss-cn-beijing.aliyuncs.com/image/poster/20201102/1604327850157_406ac87ec128cc97ada8a5d08220fa94.jpeg"
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