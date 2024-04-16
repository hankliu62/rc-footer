import React from 'react';
import { render } from '@testing-library/react';
import Footer from '../src';

describe('Basic', () => {
  it('className props should work on component', () => {
    const className = "hankliu-footer"
    const { container } = render(
      <Footer className={className} />,
    );
    // @ts-ignore
    expect(container.firstChild).toHaveClass(className);
  });

  it('prefixCls props should work on component', () => {
    const prefixCls = "hankliu-footer"
    const { container } = render(
      <Footer prefixCls={prefixCls} />,
    );
    // @ts-ignore
    expect(container.firstChild).toHaveClass(prefixCls);
  });

  it('productLinks props should work on component', () => {
    const productLinks = [
      {
        name: '懒人选择器',
        link: 'https://hankliu62.github.io/lucky-choose/',
      },
    ]
    const { container } = render(
      <Footer productLinks={productLinks} />,
    );

    const link = container.querySelector('.hlui-footer-box-top-content-list-item-links-link-href');
    expect(link).toHaveProperty('href');
    expect(link.textContent).toEqual(productLinks[0].name);
    expect(link.getAttribute('href')).toEqual(productLinks[0].link);
  });

  it('productLinks length props should work on component', () => {
    const productLinks = [
      {
        name: '懒人选择器',
        link: 'https://hankliu62.github.io/lucky-choose/',
      },
      {
        name: '个人简历',
        link: 'https://hankliu62.github.io/resume/',
      },
    ]
    const { container } = render(
      <Footer productLinks={productLinks} />,
    );

    const wrapper = container.querySelectorAll('.hlui-footer-box-top-content-list-item-cols .hlui-footer-box-top-content-list-item-cols-col')
    const link = container.querySelectorAll('.hlui-footer-box-top-content-list-item-cols .hlui-footer-box-top-content-list-item-links-link-href');
    expect(wrapper.length).toEqual(1);
    expect(link.length).toEqual(productLinks.length);
  });

  it('productLinks should has two column on component', () => {
    const productLinks = [
      {
        name: '设计动画',
        link: 'https://hankliu62.github.io/icss/',
      },
      {
        name: '个人简历',
        link: 'https://hankliu62.github.io/resume/',
      },
      {
        name: '面试宝典',
        link: 'https://hankliu62.github.io/interview/',
      },
      {
        name: 'Hank-Design',
        link: 'https://hankliu62.github.io/hankliu-ui/',
      },
      {
        name: '中午吃什么',
        link: 'https://hankliu62.github.io/what-lunch/',
      },
    ]
    const { container } = render(
      <Footer productLinks={productLinks} />,
    );

    const wrapper = container.querySelectorAll('.hlui-footer-box-top-content-list-item-cols .hlui-footer-box-top-content-list-item-cols-col')
    const link = container.querySelectorAll('.hlui-footer-box-top-content-list-item-cols .hlui-footer-box-top-content-list-item-links-link-href');
    expect(wrapper.length).toEqual(2);
    expect(link.length).toEqual(productLinks.length);
  });

  it('max 6 productLinks length should has two column on component', () => {
    const productLinks = [
      {
        name: '设计动画',
        link: 'https://hankliu62.github.io/icss/',
      },
      {
        name: '个人简历',
        link: 'https://hankliu62.github.io/resume/',
      },
      {
        name: '面试宝典',
        link: 'https://hankliu62.github.io/interview/',
      },
      {
        name: 'Hank-Design',
        link: 'https://hankliu62.github.io/hankliu-ui/',
      },
      {
        name: '中午吃什么',
        link: 'https://hankliu62.github.io/what-lunch/',
      },
      {
        name: '懒人选择器',
        link: 'https://hankliu62.github.io/lucky-choose/',
      },
      {
        name: '懒人选择器2',
        link: 'https://hankliu62.github.io/lucky-choose2/',
      },
    ]
    const { container } = render(
      <Footer productLinks={productLinks} />,
    );

    const wrapper = container.querySelectorAll('.hlui-footer-box-top-content-list-item-cols .hlui-footer-box-top-content-list-item-cols-col')
    const link = container.querySelectorAll('.hlui-footer-box-top-content-list-item-cols .hlui-footer-box-top-content-list-item-links-link-href');
    expect(wrapper.length).toEqual(2);
    expect(link.length).toEqual(6);
  });

  it('className and style props should work on img element', () => {
    const { container } = render(
      <Footer />,
    );
    const img = container.querySelector('img');
    // @ts-ignore
    expect(img).toHaveClass('hlui-footer-box-top-image-link-logo');
  });

  it('wrapper attribute should work on image wrapper element', () => {
    const { container } = render(
      <Footer />,
    );
    const wrapperElement = container.querySelector('img').parentElement;
    expect(wrapperElement).toHaveProperty('href');
  });
});
