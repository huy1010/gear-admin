import React, { useState } from 'react'
import styles from './styles.less';
import { Space, Tooltip, Button, Modal } from 'antd';
import {
    EditOutlined,
    DeleteOutlined,
    ExclamationCircleOutlined
  } from '@ant-design/icons';
import {router} from 'umi';
import {connect} from 'dva';
const ActionRender = ({voucher,dispatch}) => {
  return (
    <Space size="middle">

      <Tooltip title ="Xóa" > 
        <Button className={styles.buttonContainer}
          onClick = {()=>{
            Modal.confirm({
              title: 'Xóa voucher',
              icon: <ExclamationCircleOutlined />,
              content: 'Bạn chắc chắn muốn xóa voucher "' + voucher.voucherName +'"!',
              okText: 'Xóa',
              okType: 'danger',
              cancelText: 'Hủy',
              onOk() {
                dispatch({
                  type: 'voucher/deleteVoucher',
                  payload: voucher,
                })
              },
              onCancel() {
                console.log('Cancel');
              },
            });
          }}
        >
           <DeleteOutlined />
        </Button>
      </Tooltip>
    </Space>
  )
}
export default connect() (ActionRender);