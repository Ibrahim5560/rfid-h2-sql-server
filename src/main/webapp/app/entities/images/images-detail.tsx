import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './images.reducer';

export const ImagesDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const imagesEntity = useAppSelector(state => state.images.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="imagesDetailsHeading">
          <Translate contentKey="rfidh2SqlServerApp.images.detail.title">Images</Translate>
        </h2>
        <dl className="jh-entity-details">
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.id}</dd>
          <dt>
            <span id="guid">
              <Translate contentKey="rfidh2SqlServerApp.images.guid">Guid</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.guid}</dd>
          <dt>
            <span id="plate">
              <Translate contentKey="rfidh2SqlServerApp.images.plate">Plate</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.plate}</dd>
          <dt>
            <span id="imageLp">
              <Translate contentKey="rfidh2SqlServerApp.images.imageLp">Image Lp</Translate>
            </span>
          </dt>
          <dd>
            {imagesEntity.imageLp ? (
              <div>
                {imagesEntity.imageLpContentType ? (
                  <a onClick={openFile(imagesEntity.imageLpContentType, imagesEntity.imageLp)}>
                    <img src={`data:${imagesEntity.imageLpContentType};base64,${imagesEntity.imageLp}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {imagesEntity.imageLpContentType}, {byteSize(imagesEntity.imageLp)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="imageThumb">
              <Translate contentKey="rfidh2SqlServerApp.images.imageThumb">Image Thumb</Translate>
            </span>
          </dt>
          <dd>
            {imagesEntity.imageThumb ? (
              <div>
                {imagesEntity.imageThumbContentType ? (
                  <a onClick={openFile(imagesEntity.imageThumbContentType, imagesEntity.imageThumb)}>
                    <img
                      src={`data:${imagesEntity.imageThumbContentType};base64,${imagesEntity.imageThumb}`}
                      style={{ maxHeight: '30px' }}
                    />
                  </a>
                ) : null}
                <span>
                  {imagesEntity.imageThumbContentType}, {byteSize(imagesEntity.imageThumb)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="anpr">
              <Translate contentKey="rfidh2SqlServerApp.images.anpr">Anpr</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.anpr}</dd>
          <dt>
            <span id="rfid">
              <Translate contentKey="rfidh2SqlServerApp.images.rfid">Rfid</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.rfid}</dd>
          <dt>
            <span id="dataStatus">
              <Translate contentKey="rfidh2SqlServerApp.images.dataStatus">Data Status</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.dataStatus}</dd>
          <dt>
            <span id="gantry">
              <Translate contentKey="rfidh2SqlServerApp.images.gantry">Gantry</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.gantry}</dd>
          <dt>
            <span id="lane">
              <Translate contentKey="rfidh2SqlServerApp.images.lane">Lane</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.lane}</dd>
          <dt>
            <span id="kph">
              <Translate contentKey="rfidh2SqlServerApp.images.kph">Kph</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.kph}</dd>
          <dt>
            <span id="ambush">
              <Translate contentKey="rfidh2SqlServerApp.images.ambush">Ambush</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.ambush}</dd>
          <dt>
            <span id="direction">
              <Translate contentKey="rfidh2SqlServerApp.images.direction">Direction</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.direction}</dd>
          <dt>
            <span id="vehicle">
              <Translate contentKey="rfidh2SqlServerApp.images.vehicle">Vehicle</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.vehicle}</dd>
          <dt>
            <span id="issue">
              <Translate contentKey="rfidh2SqlServerApp.images.issue">Issue</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.issue}</dd>
          <dt>
            <span id="status">
              <Translate contentKey="rfidh2SqlServerApp.images.status">Status</Translate>
            </span>
          </dt>
          <dd>{imagesEntity.status}</dd>
        </dl>
        <Button tag={Link} to="/images" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/images/${imagesEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default ImagesDetail;
