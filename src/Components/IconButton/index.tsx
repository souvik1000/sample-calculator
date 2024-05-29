import { DownloadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';

const IconButton = () => {
    return (
        <div>
            <Button icon={<DownloadOutlined />} size='large' />
        </div>
    )
}

export default IconButton
