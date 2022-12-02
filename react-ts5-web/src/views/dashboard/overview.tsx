import { Badge, Card, Col, ColProps, Progress, Row, Tooltip } from "antd";
import moment from "moment";
import React from "react";
import { CaretUpFilled, CaretDownFilled } from "@ant-design/icons";
import { ResponsiveContainer, AreaChart, Tooltip as RTooltip, Area, XAxis, BarChart, Bar } from "recharts";
const data = new Array(14).fill(null).map((_, index) => ({
  name: moment().add(index, "day").format("YYYY-MM-DD"),
  number: Math.floor(Math.random() * 8 + 1),
}));

const wrapperCol: ColProps = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 6,
};

interface ColCardProps {
  metaName: string;
  metaCount: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  loading: boolean;
}

const ColCard: React.FC<ColCardProps> = ({ metaName, metaCount, body, footer, loading }) => {
  return (
    <Col {...wrapperCol}>
      <Card loading={loading} className="overview" bordered={false}>
        <div className="overview-header">
          <div className="overview-header-meta">{metaName}</div>
          <div className="overview-header-count">{metaCount}</div>
        </div>
        <div className="overview-body">{body}</div>
        <div className="overview-footer">{footer}</div>
      </Card>
    </Col>
  );
};

const CustomTooltip: React.FC<any> = ({ active, payload, label }) => {
  if (!active) {
    return <></>;
  }
  return (
    <div className="customTooltip">
      <span className="customTooltip-title">
        <Badge color={payload[0].fill} />
        {label}:{payload[0].value}
      </span>
    </div>
  );
};

interface TrendProps {
  wow: string;
  dod: string;
  style?: React.CSSProperties;
}

const Trend: React.FC<TrendProps> = ({ wow, dod, style = {} }) => {
  return (
    <div className="trend" style={style}>
      <div className="trend-item">
        <span className="trend-item-label">周同比</span>
        <span className="trand-item-text">{wow}</span>

        <CaretUpFilled style={{ color: "#f5222d" }} color="#f5222d" />
      </div>
      <div className="trend-item">
        <span className="trend-item-label">日同比</span>
        <span className="trand-item-text">{dod}</span>
        <CaretDownFilled color="#52c41a" />
      </div>
    </div>
  );
};

interface FieldProps {
  name: string;
  number: string;
}

const Field: React.FC<FieldProps> = ({ name, number }) => (
  <div className="field">
    <span className="field-label">{name}</span>
    <span className="field-number">{number} </span>
  </div>
);

const Overview: React.FC<{ loading: boolean }> = ({ loading }) => {
  return (
    <Row gutter={[12, 12]}>
      <ColCard
        loading={loading}
        metaName="今日营收"
        metaCount={`￥126.560`}
        body={<Trend wow="12%" dod="12%" />}
        footer={<Field name="日销售额" number="￥12.423" />}
      ></ColCard>
      <ColCard
        loading={loading}
        metaName="今日访客"
        metaCount="10"
        body={
          <ResponsiveContainer>
            <AreaChart data={data}>
              <XAxis dataKey="name" />
              <RTooltip content={<CustomTooltip />} />
              <Area stopOpacity={0} type="monotone" dataKey="number" fill="#8E65D3" />
            </AreaChart>
          </ResponsiveContainer>
        }
        footer={<Field name="今日成交" number="6" />}
      />
      <ColCard
        loading={loading}
        metaName="本月营收"
        metaCount="6560"
        body={
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <RTooltip content={<CustomTooltip />} />
              <Bar strokeOpacity={0} barSize={10} dataKey="number" stroke="#3B80D9" fill="#3B80D9" />
            </BarChart>
          </ResponsiveContainer>
        }
        footer={<Field name="与上月同比" number="60%" />}
      />
      <ColCard
        loading={loading}
        metaName="本月成交单数"
        metaCount="8846"
        body={<Progress strokeColor="#58BFC1" percent={85} />}
        footer={<Trend style={{ position: "inherit" }} wow="12%" dod="12%" />}
      />
    </Row>
  );
};
export default Overview;
