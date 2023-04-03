import { Checkbox, Collapse } from 'antd';
import DropdownList from 'components/Community/DropdownList';
const { Panel } = Collapse;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const Community = () => {
  const onChange = (key) => {
    console.log(key);
  };

  const genExtra = () => (
    <DropdownList />
  );
  return (
    <div className="community">
      <Collapse defaultActiveKey={['1']} onChange={onChange}>
        <Panel header="Quận Hai Bà Trưng" key="1">
          <Collapse defaultActiveKey={['1']} onChange={onChange}>
            <Panel header="Phường Vĩnh Tuy" key="1">
              <Collapse onChange={onChange}>
                <Panel header="Dữ liệu không gian đất đai nền" key="1">
                  <p>{text}</p>
                </Panel>
              </Collapse>

              <Collapse 
                onChange={onChange}
              >
                <Panel 
                  key="1"
                  className="myData" 
                  header="Dữ liệu địa chính"
                  extra={genExtra()}
                >
                  <div>
                    <Checkbox onChange={onChange}>Lớp thửa đất</Checkbox>
                  </div>
                  <div>
                    <Checkbox onChange={onChange}>Lớp tài sản gắn liền với đất</Checkbox>
                  </div>
                  <div>
                    <Checkbox onChange={onChange}>Lớp đường chỉ giới hành lang an toàn bảo vệ công trình</Checkbox>
                  </div>
                  <div>
                    <Checkbox onChange={onChange}>Lớp mốc giới hành lang an toàn bảo vệ công trình</Checkbox>
                  </div>
                  <div>
                    <Checkbox onChange={onChange}>Lớp mốc giới quy hoạch</Checkbox>
                  </div>
                  <div>
                    <Checkbox onChange={onChange}>Lớp đường chỉ giới quy hoạch</Checkbox>
                  </div>
                </Panel>
              </Collapse>
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
    </div>
  );
};
export default Community;