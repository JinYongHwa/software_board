<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>글번호</th>
                    <th>제목</th>
                    <th>조회수</th>
                    <th>작성자</th>
                    <th>작성일</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="board in boardList" @click="moveView(board)">
                    <td>
                        {{ board.no }}
                    </td>
                    <td>{{ board.title }}</td>
                    <td>{{ board.viewCount }}</td>
                    <td>{{ board.writer }}</td>
                    <td>{{ board.writeDate }}</td>
                </tr>
            </tbody>
        </table>

        <div class="text-right">
            <v-btn color="primary" variant="outlined" @click="moveWrite">글쓰기</v-btn>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return { //변수를 선언하는 영역
            name: "홍길동",
            age: 20,
            arr: [
                { name: "홍길동", age: 18 },
                { name: "김철수", age: 25 },
                { name: "이영희", age: 30 }
            ],
            boardList: [
                {
                    no: 1,
                    title: "asdfasdf",
                    viewCount: 102,
                    writer: "진용화",
                    writeDate: "2021-01-01"
                },
                {
                    no: 2,
                    title: "제목1",
                    viewCount: 100,
                    writer: "홍길동",
                    writeDate: "2021-01-01"
                },
                {
                    no: 1,
                    title: "제목1",
                    viewCount: 100,
                    writer: "홍길동",
                    writeDate: "2021-01-01"
                },
                {
                    no: 1,
                    title: "제목1",
                    viewCount: 100,
                    writer: "홍길동",
                    writeDate: "2021-01-01"
                },
                {
                    no: 1,
                    title: "제목1",
                    viewCount: 100,
                    writer: "홍길동",
                    writeDate: "2021-01-01"
                },
                {
                    no: 1,
                    title: "제목1",
                    viewCount: 100,
                    writer: "홍길동",
                    writeDate: "2021-01-01"
                },
                {
                    no: 1,
                    title: "제목1",
                    viewCount: 100,
                    writer: "홍길동",
                    writeDate: "2021-01-01"
                },
            ]
        }
    },
    computed: {
        ageSum() {
            let sum = 0;
            for (let i = 0; i < this.arr.length; i++) {
                sum += this.arr[i].age;
            }
            return sum;
        }
    },
    methods: {
        addPerson() {
            this.arr.push({
                name: this.name,
                age: this.age
            })
        },
        moveWrite() {
            this.$router.push("/write");
        },
        moveView(board) {
            this.$router.push("/view/" + board.no);
        }
    }
}
</script>
<style lang="less">
@line-color: #999;

.red {
    color: red;
}

.green {
    color: green;
}

table {
    width: 100%;
    border-collapse: collapse;

    tr {
        cursor: pointer;

        &:hover {
            background-color: #f0f0f0;
        }
    }

    th,
    td {
        border-bottom: 1px solid @line-color;
    }
}

// table th, table td{
//     border-bottom:1px solid #999;
// }
</style>