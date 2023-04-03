import { Dropdown, Space } from 'antd';
const items = [
  {
    label: "Trình duyệt lớp dữ liệu",
    key: '0',
  },
  {
    label: "Xuất lớp dữ liệu bản đồ",
    key: '1',
  },
  {
    label: "Xem thuộc tính không gian",
    key: '2',
  },
  {
    label: "Xóa dữ liệu",
    key: '3',
  },
];
const DropdownList = () => (
  <div className="dropdown-list" onClick={e => e.stopPropagation()}>
    <Dropdown
        menu={{
        items,
        }}
        trigger={['click']}
        className="px-2"
    >
        <Space>
            <i className="fa-regular fa-ellipsis-vertical"></i>
        </Space>
    </Dropdown>
  </div>
);
export default DropdownList;