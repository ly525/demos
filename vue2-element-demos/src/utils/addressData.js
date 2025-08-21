// 地址数据 Mock
export const provincesData = [
  {
    value: '110000',
    label: '北京市',
    children: [
      {
        value: '110100',
        label: '北京市',
        children: [
          {
            value: '110101',
            label: '东城区',
            leaf: false // 表示还有街道数据需要懒加载
          },
          {
            value: '110102',
            label: '西城区',
            leaf: false
          },
          {
            value: '110105',
            label: '朝阳区',
            leaf: false
          },
          {
            value: '110106',
            label: '丰台区',
            leaf: false
          },
          {
            value: '110107',
            label: '石景山区',
            leaf: false
          },
          {
            value: '110108',
            label: '海淀区',
            leaf: false
          }
        ]
      }
    ]
  },
  {
    value: '310000',
    label: '上海市',
    children: [
      {
        value: '310100',
        label: '上海市',
        children: [
          {
            value: '310101',
            label: '黄浦区',
            leaf: false
          },
          {
            value: '310104',
            label: '徐汇区',
            leaf: false
          },
          {
            value: '310105',
            label: '长宁区',
            leaf: false
          },
          {
            value: '310106',
            label: '静安区',
            leaf: false
          },
          {
            value: '310107',
            label: '普陀区',
            leaf: false
          },
          {
            value: '310109',
            label: '虹口区',
            leaf: false
          }
        ]
      }
    ]
  },
  {
    value: '440000',
    label: '广东省',
    children: [
      {
        value: '440100',
        label: '广州市',
        children: [
          {
            value: '440103',
            label: '荔湾区',
            leaf: false
          },
          {
            value: '440104',
            label: '越秀区',
            leaf: false
          },
          {
            value: '440105',
            label: '海珠区',
            leaf: false
          },
          {
            value: '440106',
            label: '天河区',
            leaf: false
          },
          {
            value: '440111',
            label: '白云区',
            leaf: false
          }
        ]
      },
      {
        value: '440300',
        label: '深圳市',
        children: [
          {
            value: '440303',
            label: '罗湖区',
            leaf: false
          },
          {
            value: '440304',
            label: '福田区',
            leaf: false
          },
          {
            value: '440305',
            label: '南山区',
            leaf: false
          },
          {
            value: '440306',
            label: '宝安区',
            leaf: false
          },
          {
            value: '440307',
            label: '龙岗区',
            leaf: false
          }
        ]
      }
    ]
  },
  {
    value: '320000',
    label: '江苏省',
    children: [
      {
        value: '320100',
        label: '南京市',
        children: [
          {
            value: '320102',
            label: '玄武区',
            leaf: false
          },
          {
            value: '320104',
            label: '秦淮区',
            leaf: false
          },
          {
            value: '320105',
            label: '建邺区',
            leaf: false
          },
          {
            value: '320106',
            label: '鼓楼区',
            leaf: false
          }
        ]
      },
      {
        value: '320500',
        label: '苏州市',
        children: [
          {
            value: '320505',
            label: '虎丘区',
            leaf: false
          },
          {
            value: '320506',
            label: '吴中区',
            leaf: false
          },
          {
            value: '320507',
            label: '相城区',
            leaf: false
          }
        ]
      }
    ]
  }
]

// 街道数据 Mock - 模拟懒加载的街道数据
export const streetsData = {
  // 北京东城区
  '110101': [
    { value: '110101001', label: '东华门街道', leaf: true },
    { value: '110101002', label: '景山街道', leaf: true },
    { value: '110101003', label: '交道口街道', leaf: true },
    { value: '110101004', label: '安定门街道', leaf: true },
    { value: '110101005', label: '北新桥街道', leaf: true },
    { value: '110101006', label: '东四街道', leaf: true },
    { value: '110101007', label: '朝阳门街道', leaf: true },
    { value: '110101008', label: '建国门街道', leaf: true },
    { value: '110101009', label: '东直门街道', leaf: true },
    { value: '110101010', label: '和平里街道', leaf: true }
  ],
  // 北京西城区
  '110102': [
    { value: '110102001', label: '西长安街街道', leaf: true },
    { value: '110102002', label: '新街口街道', leaf: true },
    { value: '110102003', label: '月坛街道', leaf: true },
    { value: '110102004', label: '展览路街道', leaf: true },
    { value: '110102005', label: '德胜街道', leaf: true },
    { value: '110102006', label: '金融街街道', leaf: true },
    { value: '110102007', label: '什刹海街道', leaf: true },
    { value: '110102008', label: '大栅栏街道', leaf: true }
  ],
  // 北京朝阳区
  '110105': [
    { value: '110105001', label: '建外街道', leaf: true },
    { value: '110105002', label: '朝外街道', leaf: true },
    { value: '110105003', label: '呼家楼街道', leaf: true },
    { value: '110105004', label: '三里屯街道', leaf: true },
    { value: '110105005', label: '左家庄街道', leaf: true },
    { value: '110105006', label: '香河园街道', leaf: true },
    { value: '110105007', label: '和平街街道', leaf: true },
    { value: '110105008', label: '安贞街道', leaf: true },
    { value: '110105009', label: '亚运村街道', leaf: true },
    { value: '110105010', label: '小关街道', leaf: true },
    { value: '110105011', label: '酒仙桥街道', leaf: true },
    { value: '110105012', label: '麦子店街道', leaf: true },
    { value: '110105013', label: '团结湖街道', leaf: true },
    { value: '110105014', label: '六里屯街道', leaf: true },
    { value: '110105015', label: '八里庄街道', leaf: true }
  ],
  // 上海黄浦区
  '310101': [
    { value: '310101001', label: '南京东路街道', leaf: true },
    { value: '310101002', label: '外滩街道', leaf: true },
    { value: '310101003', label: '半淞园路街道', leaf: true },
    { value: '310101004', label: '小东门街道', leaf: true },
    { value: '310101005', label: '豫园街道', leaf: true },
    { value: '310101006', label: '老西门街道', leaf: true },
    { value: '310101007', label: '五里桥街道', leaf: true },
    { value: '310101008', label: '打浦桥街道', leaf: true },
    { value: '310101009', label: '淮海中路街道', leaf: true },
    { value: '310101010', label: '瑞金二路街道', leaf: true }
  ],
  // 上海徐汇区
  '310104': [
    { value: '310104001', label: '天平路街道', leaf: true },
    { value: '310104002', label: '湖南路街道', leaf: true },
    { value: '310104003', label: '斜土路街道', leaf: true },
    { value: '310104004', label: '枫林路街道', leaf: true },
    { value: '310104005', label: '长桥街道', leaf: true },
    { value: '310104006', label: '田林街道', leaf: true },
    { value: '310104007', label: '虹梅路街道', leaf: true },
    { value: '310104008', label: '康健新村街道', leaf: true },
    { value: '310104009', label: '徐家汇街道', leaf: true },
    { value: '310104010', label: '凌云路街道', leaf: true }
  ],
  // 广州天河区
  '440106': [
    { value: '440106001', label: '沙河街道', leaf: true },
    { value: '440106002', label: '五山街道', leaf: true },
    { value: '440106003', label: '员村街道', leaf: true },
    { value: '440106004', label: '车陂街道', leaf: true },
    { value: '440106005', label: '石牌街道', leaf: true },
    { value: '440106006', label: '天河南街道', leaf: true },
    { value: '440106007', label: '林和街道', leaf: true },
    { value: '440106008', label: '沙东街道', leaf: true },
    { value: '440106009', label: '兴华街道', leaf: true },
    { value: '440106010', label: '棠下街道', leaf: true },
    { value: '440106011', label: '天园街道', leaf: true },
    { value: '440106012', label: '冼村街道', leaf: true },
    { value: '440106013', label: '猎德街道', leaf: true },
    { value: '440106014', label: '元岗街道', leaf: true },
    { value: '440106015', label: '黄村街道', leaf: true }
  ],
  // 深圳南山区
  '440305': [
    { value: '440305001', label: '南头街道', leaf: true },
    { value: '440305002', label: '南山街道', leaf: true },
    { value: '440305003', label: '沙河街道', leaf: true },
    { value: '440305004', label: '蛇口街道', leaf: true },
    { value: '440305005', label: '招商街道', leaf: true },
    { value: '440305006', label: '粤海街道', leaf: true },
    { value: '440305007', label: '桃源街道', leaf: true },
    { value: '440305008', label: '西丽街道', leaf: true }
  ],
  // 其他区域的街道数据可以继续添加...
  '110106': [
    { value: '110106001', label: '右安门街道', leaf: true },
    { value: '110106002', label: '太平桥街道', leaf: true },
    { value: '110106003', label: '西罗园街道', leaf: true },
    { value: '110106004', label: '大红门街道', leaf: true },
    { value: '110106005', label: '南苑街道', leaf: true }
  ]
}

// 模拟异步加载街道数据的API
export function loadStreets(districtCode) {
  return new Promise((resolve) => {
    // 模拟网络请求延迟
    setTimeout(() => {
      const streets = streetsData[districtCode] || []
      resolve(streets)
    }, 500) // 500ms 延迟模拟网络请求
  })
}
