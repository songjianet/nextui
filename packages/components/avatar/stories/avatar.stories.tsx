import React from "react";
import {ComponentMeta} from "@storybook/react";
import {Activity, Camera} from "@nextui-org/shared-icons";
import {avatar} from "@nextui-org/theme";

import {Avatar, AvatarProps} from "../src";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["default", "primary", "secondary", "success", "warning", "danger"],
      },
    },
    radius: {
      control: {
        type: "select",
        options: ["none", "sm", "md", "lg", "full"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
  },
} as ComponentMeta<typeof Avatar>;

const Template = (args: AvatarProps) => <Avatar {...args} />;

const defaultProps = {
  ...avatar.defaultVariants,
};

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithText = Template.bind({});
WithText.args = {
  ...defaultProps,
  name: "JW",
  color: "danger",
};

export const IsDisabled = Template.bind({});
IsDisabled.args = {
  ...defaultProps,
  src: "https://i.pravatar.cc/300?u=a042581f4e29026709d",
  color: "secondary",
  isBordered: true,
  isDisabled: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  ...defaultProps,
  src: "https://i.pravatar.cc/300?u=a042581f4e29026705d",
};

export const isBordered = Template.bind({});
isBordered.args = {
  ...defaultProps,
  src: "https://i.pravatar.cc/300?u=a042581f4e29026709d",
  color: "secondary",
  isBordered: true,
};

export const isFocusable = Template.bind({});
isFocusable.args = {
  ...defaultProps,
  src: "https://i.pravatar.cc/300?u=a042581f4e29026707d",
  isFocusable: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  ...defaultProps,
  size: "lg",
};

export const Custom = Template.bind({});
Custom.args = {
  ...defaultProps,
  icon: <Activity fill="currentColor" size={20} />,
  radius: "xl",
  classNames: {
    base: "shadow-lg bg-cyan-200 dark:bg-cyan-800",
  },
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  ...defaultProps,
  classNames: {
    base: "w-32 h-32 text-base",
  },
};

export const CustomSizeImg = Template.bind({});
CustomSizeImg.args = {
  ...defaultProps,
  src: "https://i.pravatar.cc/300?u=a042581f4e29026705d",
  name: "Junior",
  classNames: {
    base: "w-32 h-32 text-base",
  },
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  ...defaultProps,
  classNames: {
    icon: "text-default-400",
  },
};

export const IconFallback = Template.bind({});
IconFallback.args = {
  ...defaultProps,
  src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  showFallback: true,
};

export const InitialsFallback = Template.bind({});
InitialsFallback.args = {
  ...defaultProps,
  src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
  name: "Junior",
  showFallback: true,
};

export const CustomFallback = Template.bind({});
CustomFallback.args = {
  ...defaultProps,
  src: "https://images.unsplash.com/broken",
  showFallback: true,
  fallback: (
    <Camera className="animate-pulse w-6 h-6 text-default-500" fill="currentColor" size={20} />
  ),
};

export const BrokenImage = Template.bind({});
BrokenImage.args = {
  ...defaultProps,
  src: "https://images.unsplash.com/broken-image",
  name: "Junior",
  showFallback: true,
};
