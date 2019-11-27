function quickSort(arr, start = 0, end = arr.length - 1){
    if(start - end >= 0){
        return arr;
    }
    const baseValue = arr[end];
    // 这里👇
    let j = start;
    // 第二天复习了一下这个算法 发现这个问题没有记住 再说一下 记录在下面了📝
    for( let i=start; i<=end; i++ ){
        if( arr[i] <= baseValue ){
            [arr[i], arr[j]] = [arr[j], arr[i]];
            j++;
        }
        // console.log(j);
    }
    // console.log('***')
    quickSort(arr, start, j - 2);
    quickSort(arr, j, end)
    return arr;
}

const arr = [2, 3, 21, 4, 1, 34, 1, 2];
// [ 2, 1, 1, 2, 3, 4, 21, 34 ]
console.log(quickSort(arr));

// 遇到的问题：return 处写错了 原本想要写：return [...quickSort(arr, start, j - 2), ...quickSort(arr, j, end)]
// 这样子 返回的是好多个arr concat 之后的数组 太傻吊了......
// 刚开始很傻的没有用start end 去初始化函数内的边界值 都用了0 和 arr.length - 1
// quickSort(arr, start, j - 2); 这个j - 2 是试了很多次发现应该是 j-2 本不应该试这么多次
// 每次的baseValue 应该在进行一次比较之后就不要 再动位置了 保持住位置 以它为中心左边再进行排序 右边进行排序 
// [arr[i], arr[j]] = [arr[j], arr[i]];
// j++;
// 因为 j 在交换完位置后 又+1了 所以j 的位置是baseValue的 下一个位置 注意【arr[i] <= baseValue 】 那么前半部分的结束应该是 j - 2 因为j-1是baseValue
// 相信很多人都比我清楚
// 为了不再看完就忘 我要多回来看一看 还要记录一下 加油！

// 为了不再看完就忘 我要多回来看一看 还要记录一下 加油！

// 回头复习+总结：
// 第二天就之前写错的快排算法进行了修改 本来是信心满满的不会出错了 可是还是堆栈溢出 为什么会一直调用？
// 经过一点修改之后 还是不行 不得已看了一下前一天在这里写的代码，对比发现 j 的值我一直都在给它赋值为0 实际上不应该这样
// 这个算法并不是将一个数组 真正意义上的 "分" 为三部分 即 左 baseValue 右
// 如果是新开内存 将左 右 两部分数组存起来 那么每次递归调用函数本身 的 j 的初始值应该是0 即数组的首项元素 影响内存占用
// 在这里的这个算法不是这样的 而是在原来的数组上做文章。那么每次的start end 要起到很大的作用 要利用start end 去初始化 函数里用到的 边界值的赋值
// 包括 for 循环的 *i 的初始值*  *i 的最大值*  以及 *j 的初始值*  i 与 j 的初始值应当始终一致  *baseValue 的值*  
// 因为end 是对应"数组片段的最后一个索引值" *for循环里 条件判断 记得 是 <=end 有等号的 *
// 和baseValue的比较也要加一个等号 将和baseValue相等的值放到左边  baseValue 本身也放到 "偏左" 的位置 这样子 j - 1 对应的数组元素是baseValue
// 接上一行 这也是为什么 左边想要 递归调用函数本身时 end 对应的参数是 j - 2  右边想要递归调用时 是 j  j对应的数组元素 是右边的第一个位置 
// 期待后续发现🎁

// 隔21天再回头看看 会不会 太久呢？:)

// 是的没有隔12消逝我又来了
// 要说一下 这里面用到了递归  那么就得要有结束条件 不然会进入死循环 导致栈溢出
// if(start - end >= 0){
//      return arr;
//  }



