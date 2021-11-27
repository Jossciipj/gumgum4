import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs, text, boolean, select, object } from '@kadira/storybook-addon-knobs';

import * as options from '../constants/options';

import Badge from '../components/atoms/Badge';
import Button from '../components/atoms/Button';
import ButtonGroup from '../components/atoms/ButtonGroup';
import { buttonOptions } from '../constants/atoms/button.js';
import LoadingDots from '../components/atoms/LoadingDots';
import NumberCircle from '../components/atoms/NumberCircle';
import Tag from '../components/atoms/Tag';
import Trend from '../components/atoms/Trend';

const stories = storiesOf('Atoms', module);
stories.addDecorator(withKnobs);

stories
    // BADGE
    .addWithInfo(
        'Badge',
        `The \`<Badge>\` component is a numerical indicator of associated items. For a simple colored circle without a number inside, pass in the "empty" prop. If empty, it will not display any text within the badge.
        `,
        () => (
            <Badge
                text={ text('Label', '2') }
                context={ select('Context', options.badgeContexts, '') }
                empty={ boolean('Empty', false) }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            />
        ),
        { inline: true, propTables: [Badge]}
    )
    // BUTTON
    .addWithInfo(
        'Button',
        `The \`<Button>\` component wraps any arbitrary components or JSX markup into a clickable button.
        `,
        () => (
            <Button
                type={ text('Type', 'button') }
                size={ select('Size', buttonOptions.size, '') }
                context={ select('Context', buttonOptions.context, 'default') }
                group={ boolean('Group', false) }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
                onClick={ action('button_clicked') }
            >
                <i className="fa fa-check -m-r-2" />
                Great Success
            </Button>
        ),
        { inline: true, propTables: [Button]}
    )
    // BUTTON GROUP
    .addWithInfo(
        'ButtonGroup',
        `The \`<ButtonGroup>\` wraps a series of \`<Button>\` components with a group prop.
        `,
        () => (
            <ButtonGroup
                size={ select('Size', buttonOptions.size, '') }
                responsive={ boolean('Responsive', false) }
                className={ text('ClassName', '') }
                style={ object('Style', {}) }
            >
                <Button
                    group
                    context="default">
                    Button 1
                </Button>
                <Button
                    group
                    context="primary">
                    Button 2
                </Button>
                <Button
                    group
                    context="secondary">
                    Button 3
                </Button>
            </ButtonGroup>
        ),
        { inline: true, propTables: [ButtonGroup]}
    )
    // LOADING DOTS
    .addWithInfo(
        'Loading Dots',
        `The \`<LoadingDots>\` component is used to indicate asynchronous loading of content.
            \n`,
        () => (
            <LoadingDots
                size={ select('Size', options.loadingSizeOptions, '') }
                whiteDots={ boolean('White Dots', false) }
                className={ text('ClassName', '-p-a-5') }
                style={ object('Styles', {}) }
            />
        ),
        { inline: true, propTables: [LoadingDots]}
    )
    // NUMBER CIRCLE
    .addWithInfo(
        'Number Circle',
        `The \`<NumberCircle>\` component is used to indicate numeric rankings for associated content.
            \n`,
        () => (
            <NumberCircle
                text={ text('Text', '1') }
                size={ select('Size', options.numberCircleSizeOptions, '') }
                context={ select('Context', options.numberCircleContexts, '') }
                className={ text('ClassName', '') }
                style={ object('Styles', {}) }
            />
        ),
        { inline: true, propTables: [NumberCircle]}
    )
    // TAG
    .addWithInfo(
        'Tag',
        `The \`<Tag>\` component is used to indicate active or selected items, filters or options. Refer to [this](http://design-prototypes.gumgum.com/black-tie/documentation/#icons-btl) page for icon names.
            \n`,
        () => (
            <Tag
                context={ select('Context', ['normal', 'primary', 'success', 'warning', 'danger'], 'normal') }
                className={ text('Classes', '') }
                onClick={ action('tag_click') }
                hasOption={ boolean('Has Option', false) }
                optionIcon={ text('Option Icon', 'bt-times') }
                small={ boolean('Small', false) }
                style={ object('Style', {}) }
                text={ text('Text', 'Sample Text') }
                value={ text('Value', '0') }
            />
        ),
        { inline: true, propTables: [Tag]}
    )
    // TREND
    .addWithInfo(
        'Trend',
        `The \`<Trend>\` component is used to indicate a positive, neutral, or negative delta of a given value.
            \n`,
        () => (
            <Trend
                context={ select('Context', ['up', 'same', 'down'], 'up') }
                className={ text('Classes', '') }
                style={ object('Style', {}) }
                value={ text('Value', '42') }
                unit={ text('Unit', '%') }
            />
        ),
        { inline: true, propTables: [Trend]}
    )
    ;
